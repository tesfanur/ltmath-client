import { useState } from "react";
export const useForm = (callback, initialState) => {
  const [userInput, setUserInput] = useState(initialState);
  const handleSubmit = async (event, callback) => {
    event.preventDefault();
    try {
      const { data } = await callback();
      if (data) {
        console.log({
          data,
        });
        localStorage.setItem("authorization", data.callback.token);
      }
    } catch (error) {
      console.log({ error });
    }

    console.log({
      signupFromHandlesubmit: callback,
    });
    // setUserInput(initialSate);
    console.log({
      ...userInput,
    });
  };

  //destructure event object into target and then target into name and value
  const handleChange = ({ target: { name, value } }) => {
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  return {
    handleChange,
    handleSubmit,
    userInput,
  };
};
