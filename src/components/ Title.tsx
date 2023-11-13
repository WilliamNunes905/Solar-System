type TitleProps = {
  headline: string,
};

function Title({ headline }: TitleProps) {
  return (
    <h2 className="title header classMission">
      { headline }
    </h2>
  );
}

export default Title;
