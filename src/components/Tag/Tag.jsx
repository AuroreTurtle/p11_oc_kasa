import "./Tag.css";

function Tag({ tags }) {
    return (
        <div id="tags">
            {tags.map((tag) => {
                return (
                    <span className="tag" key={`${tag}`}>
                        {tag}
                    </span>
                );
            })}
        </div>
    );
}

export default Tag;
