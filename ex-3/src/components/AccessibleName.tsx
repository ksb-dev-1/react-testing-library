const AccessibleName = () => {
  return (
    <>
      <div>
        <button>Submit</button>
        <button>Cancel</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
      </div>
      <div>
        <button aria-label="sign in">
          <svg />
        </button>
        <button aria-label="sign out">
          <svg />
        </button>
      </div>
    </>
  );
};

export default AccessibleName;
