import PropTypes from 'prop-types';

Card.propTypes = {
    username: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
};

function Card({ username, city }) {
    return (
        <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/19469089/pexels-photo-19469089/free-photo-of-a-bird-perching-in-a-christmas-tree.jpeg" alt="" width="384" height="512" />
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that Ive seen scale
                            on large teams. Its easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {username}
                        </div>
                        <div>
                            Software Engineer, {city}
                        </div>
                    </figcaption>
                </div>
            </figure></>
    )
}

export default Card;
