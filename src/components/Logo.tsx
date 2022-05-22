type logoProps = {
  isWhite: boolean;
};

export const Logo = (props: logoProps) => {
  return (
    <div>
      <div className="logo">
        <a href="" className="text-decoration-none">
          <h1>
            <span className={props.isWhite ? "logo-W" : "logo-E"}>E</span>
            Shopper
          </h1>
        </a>
      </div>
    </div>
  );
};
