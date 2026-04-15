import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../../components/table"
import { Link } from "react-router-dom"
import type { ReactNode } from "react"

type GenderRow = {
    gender_id: number
    gender: string
    action?: ReactNode
}

const GenderList = () => {
    const genders: GenderRow[] = [
        {
            gender_id: 1,
            gender: "Male",
            action: (
                <div className="flex items-center gap-4">
                    <Link
                        to="/gender/edit"
                        className="  text-green-600 hover:underline font-medium  "
                    >
                        Edit
                    </Link>
                    <Link
                        to="/gender/delete"
                        className="  text-red-600 hover:underline font-medium  "
                    >
                        Delete
                    </Link>
                </div>
            ),
        },
        {
            gender_id: 2,
            gender: "Female",
            action: (
                <div className="flex items-center gap-4">
                    <Link
                        to="/gender/edit"
                        className="  text-green-600 hover:underline font-medium  "
                    >
                        Edit
                    </Link>
                    <Link
                        to="/gender/delete"
                        className="  text-red-600 hover:underline font-medium  "
                    >
                        Delete
                    </Link>
                </div>
            ),
        },
        {
            gender_id: 3,
            gender: "Prefer Not to Say",
            action: (
                <div className="flex items-center gap-4">
                    <Link
                        to="/gender/edit"
                        className="  text-green-600 hover:underline font-medium  "
                    >
                        Edit
                    </Link>
                    <Link
                        to="/gender/delete"
                        className="  text-red-600 hover:underline font-medium  "
                    >
                        Delete
                    </Link>
                </div>
            ),
        },
    ]

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div className="max-w-full max-h-[calc(100vh) overflow-x-auto "></div>
                <Table className="border-collapse">
                    <TableHeader className=" border-b border-gray-200 bg-blue-600 sticky top-0 text-xs text-white">
                        <TableRow>
                            <TableCell
                                isHeader
                                className="rounded-tl-lg px-5 py-3 text-center  "
                            >
                                No.
                            </TableCell>

                            <TableCell
                                isHeader
                                className="px-5 py-3 text-center  "
                            >
                                Gender
                            </TableCell>

                            <TableCell
                                isHeader
                                className="rounded-tr-lg px-5 py-3 text-center  "
                            >
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-100 text-sm text-gray-600">
                        {genders.map((gender, index) => (
                            <TableRow
                                className="hover:bg-gray-100" key={index}
                            >
                                <TableCell className="border-0 px-4 py-3 text-center">
                                    {gender.gender_id}
                                </TableCell>
                                <TableCell className="border-0 px-4 py-3 text-center">
                                    {gender.gender}
                                </TableCell>
                                <TableCell className="border-0 px-4 py-3 text-center">
                                    {gender.action ?? "—"}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default GenderList
