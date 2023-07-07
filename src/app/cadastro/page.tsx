"use client";
import "../cadastro.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUpSchema } from "../validations";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("entrei");
    console.log("dataInfo::", data);
  };

  return (
    <Container
      sx={{
        maxWidth: "md",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ marginTop: 10 }}>
        <Box>
          <Typography variant="h5" component="h1">
            Faça o seu cadastro
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px 0 20px",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="formElement">
            <TextField
              {...register("fullName")}
              variant="outlined"
              type="text"
              label="Nome completo"
              autoComplete="on"
              fullWidth
              size="medium"
              sx={{ mb: 2 }}
            />
            <Box sx={{ textAlign: "left", paddingBottom: 1 }}>
              <Typography color="red" variant="caption">
                {errors.fullName?.message}
              </Typography>
            </Box>

            <TextField
              {...register("email")}
              variant="outlined"
              type="text"
              label="E-mail"
              autoComplete="on"
              fullWidth
              size="medium"
              sx={{ mb: 2 }}
            />
            <Box sx={{ textAlign: "left", paddingBottom: 1 }}>
              <Typography color="red" variant="caption">
                {errors.email?.message}
              </Typography>
            </Box>

            <TextField
              {...register("password")}
              variant="outlined"
              type="password"
              label="Senha"
              autoComplete="on"
              fullWidth
              size="medium"
              sx={{ mb: 2 }}
            />
            <Box sx={{ textAlign: "left", paddingBottom: 1 }}>
              <Typography color="red" variant="caption">
                {errors.password?.message}
              </Typography>
            </Box>

            <TextField
              {...register("repeatPassword")}
              variant="outlined"
              type="password"
              label="Repetir Senha"
              autoComplete="on"
              fullWidth
              size="medium"
              sx={{ mb: 2 }}
            />
            <Box sx={{ textAlign: "left", paddingBottom: 1 }}>
              <Typography color="red" variant="caption">
                {errors.repeatPassword?.message}
              </Typography>
            </Box>

            <Button variant="contained" fullWidth type="submit">
              Cadastrar
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
