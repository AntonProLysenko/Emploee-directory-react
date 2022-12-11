export default function ContactTitle({ name, position }) {
    return (
      <div
        style={{
          marginLeft: "30px",
          textAlign: "left"
        }}
      >
        <p className="name">{name}</p>
        <p className="position">{position}</p>
      </div>
    );
  }
  