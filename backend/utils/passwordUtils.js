import bcrypt from 'bcrypt'


export const hashPassword = (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

export const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compare(plainPassword, hashedPassword);
}