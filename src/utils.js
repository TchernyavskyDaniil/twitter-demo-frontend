import numbro from "numbro";
import format from "date-fns/format";
import enLocale from "date-fns/locale/en";

export const formattedTweet = tweet => {
  const longTweet = {
    average: true,
    mantissa: 1,
    optionalMantissa: true,
    currencyPosition: "prefix"
  };

  if (tweet >= 10000) {
    return numbro(tweet)
      .format(longTweet)
      .toUpperCase();
  }

  return numbro(tweet).format({ thousandSeparated: true });
};

export const dateFormat = type =>
  format(new Date(type), "Do MMMM YYYY", { locale: enLocale });
