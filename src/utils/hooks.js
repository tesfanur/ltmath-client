import { useState } from "react";
export const useForm = (callback, initialState) => {
  const [userInput, setUserInput] = useState(initialState);

  console.log({ callback });
  const handleSubmit = async (event, callback) => {
    event.preventDefault();
    try {
      const { data } = await callback();
      if (data) {
        console.log({
          data,
          functionName: callback.name,
        });
        // console.log({
        //   userData: data,
        //   keys: Object.keys(data),
        //   values: Object.values(data),

        //   token: Object.values(data)[0].token,
        // });
        const authorization = Object.values(data)[0].token;
        localStorage.setItem("authorization", authorization);
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
