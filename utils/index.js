import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

export const hashString = async (password) => {
  const salt = await bcrypt.genSalt(10);

  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

export const compareString = async (userPassword, password) => {
  const isMatch = await bcrypt.compare(userPassword, password);
  return isMatch;
};

export function createJWT(id) {
  return jsonwebtoken.sign({ userId: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "id",
  });
}
