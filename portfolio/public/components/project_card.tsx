import { PinnedRepo } from "./github"
import * as SiIcon from "react-icons/si"

export const ProjectCard: React.FC<{ project: PinnedRepo }> = ({ project }) => {
    let type = project.primaryLanguage.name.toLowerCase();
    type = type.replace(/^\w/, (c) => c.toUpperCase());

    const parsed = `Si${type}`;

    return ( 
        <div onClick={() => {
            window.location.href = `./study/${project.name}`
        }}>
            <span>
                { project.name }
            </span>

            <div>
                <span>
                    <p>
                    {
                        project.stargazers.totalCount
                    }
                    </p>
                    
                    <p>
                        ⭐
                    </p>
                </span>
                

                {
                    SiIcon[parsed] ?
                    SiIcon[parsed]?.({
                        style: {
                            height: '1.5rem',
                            width: '1.5rem'
                        }
                    })
                    :
                    <></>
                }
            </div>
        </div>
    )
}