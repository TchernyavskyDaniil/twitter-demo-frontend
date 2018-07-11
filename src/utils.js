import numbro from "numbro";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
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

export const formatDate = type =>
  distanceInWordsToNow(
    new Date(type),
    { addSuffix: true },
    { locale: enLocale }
  );

export const formatReg = type =>
  format(new Date(type), "Do MMMM YYYY", { locale: enLocale });

export const api = "https://twitter-demo.erodionov.ru/api/v1";
export const token = process.env.REACT_APP_KEY;
