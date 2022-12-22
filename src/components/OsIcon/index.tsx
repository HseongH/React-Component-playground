/** @jsxImportSource @emotion/react */
import icons from "@/assets/icon";
import { css } from "@emotion/react";
import Stack from "../Stack";

interface OsIconProps {
  imgName: string;
}

/**
 * @typedef Props
 * @prop {string} imgName
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function OsIcon({ imgName }: OsIconProps) {
  const imgUrl: string | undefined = Object.keys(icons).find((icon) => {
    const regex = new RegExp(`[\s*.*]{0,}(${icon})[\s*.*]{0,}`, "gi");

    return regex.test(imgName);
  });

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {imgUrl ? (
        <img
          src={icons[imgUrl]}
          alt={imgName}
          css={css`
            width: 36px;
          `}
        />
      ) : null}

      <span
        css={css`
          text-transform: uppercase;
        `}
      >
        {imgName}
      </span>
    </Stack>
  );
}

export default OsIcon;
