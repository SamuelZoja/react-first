import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Football() {

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      player: "",
      reason: "",
      skill: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Username is required"),

      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),

      player: Yup.string()
        .required("Please select a player"),

      reason: Yup.string()
        .min(10, "Reason must be at least 10 characters")
        .required("Reason is required"),

      skill: Yup.string()
        .required("Select a skill"),
    }),

    onSubmit: (values) => {
      console.log(values);
      alert("Form Submitted Successfully");
    },
  });

  return (
    <div>

      <div className="hero">
        <h1>Football</h1>

        <Link to="/">Back Home</Link>
      </div>

      <div>
        <h2>About Football</h2>

        <p>
          Football is a very popular sport worldwide.
        </p>
      </div>

      <div>
        <h2>Choose Your Best Player</h2>

        <form onSubmit={formik.handleSubmit}>

          <label>Your Name</label>

          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />

          <p>{formik.errors.username}</p>

          <label>Email</label>

          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <p>{formik.errors.email}</p>

          <label>Password</label>

          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <p>{formik.errors.password}</p>

          <label>Select Best Player</label>

          <select
            name="player"
            onChange={formik.handleChange}
            value={formik.values.player}
          >
            <option value="">Select Player</option>
            <option value="Saka">Saka</option>
            <option value="Ronaldo">Ronaldo</option>
            <option value="Rice">Rice</option>
          </select>

          <p>{formik.errors.player}</p>

          <label>Why do you like this player?</label>

          <textarea
            rows="4"
            name="reason"
            onChange={formik.handleChange}
            value={formik.values.reason}
          />

          <p>{formik.errors.reason}</p>

          <label>Favorite Skill</label>

          <br />

          <input
            type="radio"
            name="skill"
            value="Dribbling"
            onChange={formik.handleChange}
          />
          Dribbling

          <br />

          <input
            type="radio"
            name="skill"
            value="Shooting"
            onChange={formik.handleChange}
          />
          Shooting

          <br />

          <input
            type="radio"
            name="skill"
            value="Passing"
            onChange={formik.handleChange}
          />
          Passing

          <p>{formik.errors.skill}</p>

          <br />

          <button type="submit">
            Submit
          </button>

        </form>
      </div>

    </div>
  );
}

export default Football;