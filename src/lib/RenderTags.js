export default function RenderTags({ tags }) {
    let parsedTags = [];

    try {
        parsedTags = Array.isArray(tags) ? tags : JSON.parse(tags);
    } catch (err) {
        parsedTags = [];
    }

    return (
        <div className="d-flex flex-wrap gap-1">
            {parsedTags.map((item, index) => (
                <span key={index} className="badge bg-info text-dark">
                    {item}
                </span>
            ))}
        </div>
    );
}
