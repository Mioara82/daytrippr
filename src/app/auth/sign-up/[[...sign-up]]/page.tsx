import { SignUp } from "@clerk/nextjs";
import { useHomeRedirect } from "../../hooks";
import { authStyles } from "../../authStyles";

const UserRegisterPage = () => {
    useHomeRedirect();

    return (
        <SignUp
            appearance={{
                elements: authStyles,
            }}
        />
    );
};

export default UserRegisterPage;