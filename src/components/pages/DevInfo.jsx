import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
        }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : مونا رمضانی</Info>
      <Info>سن : 27</Info>
      <Info>شهر : رودسر</Info>
      <Info>monaa.rm95@gmail.com : آدرس ایمیل</Info>
      <Info>شماره موبایل : 09381651208</Info>
    </>
  );
};
export default DevInfo;
