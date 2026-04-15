import { useEffect } from "react"
import AddGenderForm from "./components/AddGenderForm"
import GenderList from "./components/GenderList"

const MainPage = () => {
    useEffect(() => {
        document.title = "Gender Main Page"
    }, [])

    return (
        <>
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <AddGenderForm />
                    </div>
                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                        <GenderList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage