import { useState, type FC, type FormEvent } from "react"
import SubmitButton from "../../../components/Button/SubmitButton"
import FloatingLabelInput from "../../../components/input/FloatingLabelInput"
import GenderService from "../../../services/GenderService"
import type { GenderFieldErrors } from "../../../interfaces/GenderFieldErrors"

interface AddGenderFormProps {
    onGenderAdded: (message: string) => void
}

const MIN_GENDER_LENGTH = 3;
const MAX_GENDER_LENGTH = 30;

const AddGenderForm: FC<AddGenderFormProps> = ({onGenderAdded}) => {
    const [loadingStore, setLoadingStore] = useState (false);
    const [gender, setGender] = useState("");
    const [errors, setErrors] = useState<GenderFieldErrors>({});

    const handleStoreGender = async (e: FormEvent) => {
        try {
            e.preventDefault()
            const trimmedGender = gender.trim();

            if (!trimmedGender) {
                setErrors({ gender: ["Gender field is required."] });
                return;
            }

            if (trimmedGender.length < MIN_GENDER_LENGTH) {
                setErrors({ gender: [`Gender must be at least ${MIN_GENDER_LENGTH} characters.`] });
                return;
            }

            if (trimmedGender.length > MAX_GENDER_LENGTH) {
                setErrors({ gender: [`Gender must not be greater than ${MAX_GENDER_LENGTH} characters.`] });
                return;
            }

            setLoadingStore(true)

            const data = await GenderService.storeGender({gender: trimmedGender});

            if (data.status === 200) {
                setGender("")
                setErrors({});
                onGenderAdded(data.data.message);
            } else {
                console.error(
                    "Unexpected error occurred during store gender: ", 
                    data.data
                );
            };
        } catch (error: any) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors)
            } else {
                console.error('Unexpected server error occurred during store gender: ', error)
            }
        }
        finally {
            setLoadingStore(false);
        }
    };
    return (
        <>
            <form onSubmit={handleStoreGender}>
                <div className="mb-4">
                    <FloatingLabelInput 
                    label="Gender" 
                    type="text" 
                    name="gender" 
                    value={gender} 
                    onChange={(e) => {
                        setGender(e.target.value);
                        if (errors.gender?.length) {
                            setErrors((prev) => ({ ...prev, gender: undefined }));
                        }
                    }} 
                    required 
                    autoFocus 
                    errors={errors.gender}
                    />
                </div>
                <div className="flex justify-end">
                    <SubmitButton label="Save Gender" loading={loadingStore} loadingLabel="Saving Gender..."/>
                </div>
            </form>

        </>
    )
}


export default AddGenderForm