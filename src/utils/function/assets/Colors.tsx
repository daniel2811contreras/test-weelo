interface IColor {
  primary: string;
  secon: string;
  background: string;
  backgroundTwo: string;
  backgroundTree: string;
  white: string;
}

const Color: IColor = {
  primary: "#132C33",
  secon: "#126E82",
  background: "#8FD6E1",
  backgroundTwo: "#51C4D3",
  backgroundTree: "#D8E3E7",
  white: "#F4F9F9",
};

const ColorDark: IColor = {
  primary: "#E4E4E4",
  secon: "#126E82",
  background: "#8FD6E1",
  backgroundTwo: "#51C4D3",
  backgroundTree: "#414141",
  white: "#313131",
};

export const getColor = (): IColor => {
  const type = localStorage.getItem('Color') || 'default'
  const color: any = {
    dark: () => ColorDark,
    default: () => Color,
  };

  return color[type]();
};
