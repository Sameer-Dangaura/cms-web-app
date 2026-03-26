import { H1 } from "../../../components/ui/typography/PageTitle"
import UserRegisterationForm from "../../../components/auth/UserRegisterationForm"

export default function RightSide() {
    return (
        <div className="w-full flex flex-col gap-5 p-5 rounded-md shadow bg-gray-50">
            <div className="border-b border-b-blue-900/30 pb-5">
                <H1 className="text-blue-900 text-5xl">User Registration:</H1>
            </div>
            <div>
                <UserRegisterationForm />
            </div>
        </div>
    )
}