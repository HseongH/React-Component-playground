import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledBreadCrumbs = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 50px;
    padding: 0 ${theme.spacing[1]};

    & > span {
      color: ${theme.typography.light};
    }

    & > :nth-of-type(n) {
      margin-right: ${theme.spacing[0]}px;
    }

    & > :last-child {
      margin-right: 0;
    }

    & > h2 {
      display: inline;
      color: ${theme.typography.dark};

      & a:hover {
        text-decoration: underline;
      }
    }
  `
);

export default StyledBreadCrumbs;
