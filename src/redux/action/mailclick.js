export const mailClicks = (id, name, description, subject, time) => {
  return {
    type: "BIG_MAIL",
    id,
    name,
    description,
    subject,
    time,
  };
};
