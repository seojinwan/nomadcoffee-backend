import { createWriteStream } from "fs";
import bcrypt from "bcrypt";
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import path from "path";
import client from "../../client.js";
import { protectResolver } from "../user.utils.js";
const editProfileResolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    // TODO: edit profile (protectResolver 통해서, password, avatarURL 등 그외 프로필 수정)
    editProfile: protectResolver(
      async (
        _,
        {
          username,
          email,
          name,
          location,
          password,
          avatarURL,
          githubUsername,
        },
        { loggedUser }
      ) => {
        try {
          if (avatarURL) {
            const { filename, createReadStream } = await avatarURL;
            const readStream = createReadStream();
            const newFileName = `${loggedUser.id}-${Date.now()}-${filename}`;
            const writeStream = createWriteStream(
              path.join(process.cwd(), "uploads", newFileName)
            );
            readStream.pipe(writeStream);
            avatarURL = `http://localhost:${process.env.PORT}/static/${newFileName}`;
          }

          if (password) {
            password = await bcrypt.hash(password, 10);
          }

          const updateUser = await client.user.update({
            where: { id: loggedUser.id },
            data: {
              username,
              email,
              name,
              location,
              githubUsername,
              avatarURL,
              password,
            },
          });
          if (!updateUser) throw new Error("업데이트 과정에서 에러 발생");

          return {
            ok: true,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
          };
        }
      }
    ),
  },
};

export default editProfileResolvers;
