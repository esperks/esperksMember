import moment from "moment";
export const splitDateConversion = (ValueDate: any) => {
  if (ValueDate) {
    let parts = ValueDate.split("T");
    let finalDate = moment(parts[0]).format("DD/MM/YYYY");
    return finalDate;
  } else {
    return "N/A";
  }
};
export const versionFormatedDate = (value: string) => {
  const dateObject = new Date(value);
  const options: any = {
    // weekday: "long",
    year: "numeric",
    month: "short", // long
    day: "numeric",
  };
  const dateString = dateObject.toLocaleDateString("en-US", options);
  const timeString = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return `${dateString} (${dateObject.toLocaleDateString("en-US", {
    weekday: "short",
  })}), ${timeString}`;
  // };
  //   // const formattedDate = new Date(value).toLocaleString("en-US", {

  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric",
  //   hour12: true,
  // });
  // return formattedDate;
};
