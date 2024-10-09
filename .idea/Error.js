import { PacmanLoader } from "react-spinners";
import { ErrorText, ErrorBox } from "./styled";

export const StyledErrorText = () => (
    <ErrorBox>
        <ErrorText>
            Wystąpił błąd! Sprawdź połączenie sieci.
        </ErrorText>
    </ErrorBox>

);