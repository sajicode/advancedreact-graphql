import Reset from "../components/Reset";

const ResetPage = props => (
  <div>
    <p>Reset Your Password</p>
    {/* get token from url */}
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPage;
