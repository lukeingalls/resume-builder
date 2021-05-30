import { setAboutMeDescription } from "@store/actions/aboutMe";
import { useAppDispatch } from "@store/hooks";

export default function useAboutMeReducers() {
  const dispatch = useAppDispatch();

  return {
    setDescription: (description: string) =>
      dispatch(setAboutMeDescription({ description })),
  };
}
