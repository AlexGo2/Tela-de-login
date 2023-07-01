"use client";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  FormControl,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validations";

type FormData = {
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) =>
    console.log("dataInfo::", data);

  return (
    <Container
      sx={{
        maxWidth: "sm",
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
            Faça o seu Login
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("email")}
              variant="outlined"
              type="text"
              autoComplete="on"
              label="E-mail"
              fullWidth
              size="medium"
              sx={{ mb: 2 }}
            />
            <Typography color="red" variant="caption">
              {errors.email?.message}
            </Typography>
            <TextField
              {...register("password")}
              variant="outlined"
              type="password"
              autoComplete="on"
              label="Senha"
              fullWidth
              size="medium"
              sx={{ mb: 2 }}
            />
            <Typography color="red" variant="caption">
              {errors.password?.message}
            </Typography>

            <Button type="submit" variant="contained" fullWidth>
              Entrar
            </Button>
          </form>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption">Ainda não possui conta?</Typography>
          <Link href="/cadastro" variant="caption">
            Cadastre-se
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
