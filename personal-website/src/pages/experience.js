import "./experience.css";
import NavbarTop from "../constants/navbar/navbarTop";
import ParticleBackgroundCreate from "../constants/background/particleBackground";
const timelineData = [
    {
        text: 'DXC Technology',
        date: 'June 2023 - Present',
        category: {
            tag: 'Internship',
            color: '#018f69'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    },
    {
        text: 'Wrote my first blog post ever on Medium',
        date: 'September 2021 - May 2023',
        category: {
            tag: 'Student Worker',
            color: '#018f69'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    },
    {
        text: 'Wrote my first blog post ever on Medium',
        date: 'April 2021 - September 2021',
        category: {
            tag: 'Student Worker',
            color: '#018f69'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    },
    {
        text: 'Wrote my first blog post ever on Medium',
        date: 'June 2020 - January 2021',
        category: {
            tag: 'Self Employed',
            color: '#018f69'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    },
    {
        text: 'Wrote my first blog post ever on Medium',
        date: 'Nov 2019 - May 2020',
        category: {
            tag: 'Internship',
            color: '#018f69'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
    }
];

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

function Experience() {
    return(
    <>
    <div className='background-div'>
         <ParticleBackgroundCreate/>
   </div>
    <div className='navbar'>
    <NavbarTop/></div>
    <div className="timeline-container">
        {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
        ))}
    </div>
    </>
);
}
export default Experience;
