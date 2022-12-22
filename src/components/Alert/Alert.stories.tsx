import { ComponentMeta, ComponentStory } from "@storybook/react";
import Alert from ".";
import Button from "../Button";
import { useTypedDispatch } from "@/hooks/typedReduxHook";
import { open } from "@/redux/alertSlice";

export default {
  title: "Components/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Success: ComponentStory<typeof Alert> = () => {
  const dispatch = useTypedDispatch();
  const onOpen = () => {
    dispatch(
      open({
        open: true,
        status: "success",
        message: "성공!!",
      })
    );
  };

  return (
    <>
      <Button onClick={onOpen}>Open</Button>

      <Alert />
    </>
  );
};

export const Failed: ComponentStory<typeof Alert> = () => {
  const dispatch = useTypedDispatch();
  const onOpen = () => {
    dispatch(
      open({
        open: true,
        status: "error",
        message: "실패!!",
      })
    );
  };

  return (
    <>
      <Button onClick={onOpen}>Open</Button>

      <Alert />
    </>
  );
};
