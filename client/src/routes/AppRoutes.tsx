import { Route, Routes } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import MainPage from "../pages/gender/MainPage"
import EditGenderPage from "../pages/gender/EditGenderPage"
import DeleteGenderPage from "../pages/gender/DeleteGenderPage"
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/gender/edit" element={<EditGenderPage />} />
                    <Route path="/gender/delete" element={<DeleteGenderPage />} />
                </Route>
            </Routes>
        </>
    )
}
export default AppRoutes