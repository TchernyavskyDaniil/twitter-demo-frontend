import numbro from "numbro";
import users from "./users";

export const findUser = (user, param) => {
  try {
    return users.find(obj => obj.username === user)[param];
  } catch (e) {
    return "Invalid URL";
  }
};

export const formattedTweet = tweet => {
  const longTweet = {
    average: true,
    mantissa: 1,
    optionalMantissa: true,
    currencyPosition: "prefix"
  };

  if (tweet >= 10000) {
    return numbro(tweet).format(longTweet);
  }

  return numbro(tweet).format({ thousandSeparated: true });
};
