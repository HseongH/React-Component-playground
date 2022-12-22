/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Stack from "../Stack";

import NotFound from "@/assets/404-error.png";

interface AlternativeProps {
  width?: string;
  message: string;
}

/**
 * @typedef Props
 * @prop {string} width
 * @prop {string} message
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function Alternative({ width, message }: AlternativeProps) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        & p {
          text-align: center;
        }
      `}
    >
      <Stack direction="column" spacing={1}>
        <img
          src={NotFound}
          alt="로드할 데이터가 없습니다"
          width={width || "150px"}
        />

        <p>{message}</p>
      </Stack>
    </div>
  );
}

export default Alternative;
