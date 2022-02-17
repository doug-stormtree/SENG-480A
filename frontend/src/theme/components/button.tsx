import { ComponentStyleConfig } from "@chakra-ui/theme";
import { lightTheme } from "../colours";

const Button: ComponentStyleConfig = {
  variants: {
    "tandem-base": {
      bg: lightTheme.lightButton,
      textColor: lightTheme.buttonText,
    },
  },
  defaultProps: {
    variant: "tandem-base",
  },
};

export default Button;
