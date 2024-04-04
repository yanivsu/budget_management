// a component that received a balance parameter and renders the current balance
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
