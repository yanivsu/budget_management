export const CurrentBalance = ({ currentBalance }) => {
  return (
    <>
      <ul
        className={
          currentBalance >= 0 ? "text-success fw-bold" : "text-danger fw-bold"
        }
      >
        Current Balance: {currentBalance} ₪
      </ul>
    </>
  );
};
