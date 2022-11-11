import jwt from "jsonwebtoken";
import client from "../client.js";

export const getUser = async (token) => {
  if (!token) return null;
  const { id } = jwt.verify(token, process.env.JWT_SECRET);
  return client?.user.findUnique({ where: { id } }) ?? null;
};

export const protectResolver = (resolver) => (_, args, context, info) => {
  if (!context.loggedUser) {
    return {
      ok: false,
      error: "토큰이 유효하지 않습니다. 다시 로그인 해주세요",
    };
  }

  return resolver(_, args, context, info);
};
