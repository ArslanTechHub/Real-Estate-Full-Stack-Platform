// import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) => {
    
//     const token = req.cookies.token;

//     if (!token) return res.status(401).json({ message: "Not Authenticated!" });
  
//     jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
//       if (err) return res.status(403).json({ message: "Token is not Valid!" });
//         req.userId = payload.id;

//       next();
//     });
// };


import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    
    return res.status(401).json({ message: "Not Authenticated!" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      console.log("verification failed");
      return res.status(403).json({ message: " not Valid!" });
    }
    req.userId = payload.id;
    // console.log(`User ID : ${req.userId}`); // Log the user ID here
    next();
  });
};
