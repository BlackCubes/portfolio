const dateFormat = (language: string, givenDate: string) => {
  const date = new Date(givenDate);

  return new Intl.DateTimeFormat(language, { dateStyle: 'medium' }).format(
    date
  );
};

export default dateFormat;
