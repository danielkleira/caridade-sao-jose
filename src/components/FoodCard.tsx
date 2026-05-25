type Props = {
  alimento: string;
  meta: number;
  arrecadado: number;
};

function getProgressColor(percentage: number) {
  const p = Math.max(0, Math.min(100, percentage));

  // 0 = vermelho
  // 120 = verde
  const hue = (p * 120) / 100;

  return `hsl(${hue}, 70%, 45%)`;
}

export default function FoodCard({ alimento, meta, arrecadado }: Props) {
  const percentage =
    meta > 0 ? Math.min(100, Math.round((arrecadado / meta) * 100)) : 100;

  const falta = Math.max(0, meta - arrecadado);

  const progressColor = getProgressColor(percentage);

  return (
    <div
      className="food-card"
      style={{
        borderRight: `12px solid ${progressColor}`,
        background: `${progressColor}10`,
      }}
    >
      <div className="food-top">
        <h2>{alimento}</h2>

        <span
          style={{
            color: progressColor,
            fontWeight: "bold",
          }}
        >
          {percentage}%
        </span>
      </div>

      <div className="progress">
        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
            background: progressColor,
          }}
        />
      </div>

      <div className="food-info">
        <p>
          <strong>Meta:</strong> {meta}
        </p>

        <p>
          <strong>Arrecadado:</strong> {arrecadado}
        </p>

        <p
          className="missing"
          style={{
            color: progressColor,
            fontWeight: "bold",
          }}
        >
          Faltam: {falta}
        </p>
      </div>
    </div>
  );
}
