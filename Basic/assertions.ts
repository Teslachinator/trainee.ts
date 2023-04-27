const inputElement = document.querySelector("input");
// const value1 = inputElement?.value;
// const value1 = (inputElement as HTMLInputElement).value;
// const value1 = (<HTMLInputElement>inputElement).value;

const getLength = (text: string | null) => {
  return text!.length;
};

getLength("gre");
getLength(null);
