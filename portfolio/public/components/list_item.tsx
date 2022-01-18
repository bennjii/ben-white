import {ReactNode} from 'react';
import type {IconType} from 'react-icons';

export function ListItem({text, icon}: {text: ReactNode; icon: IconType}) {
	return (
		<li>
			<span>{icon({
                style: {
                    width: '1.5rem',
                    height: '1.5rem'
                }
            })}</span>
			<span>{text}</span>
		</li>
	);
}   