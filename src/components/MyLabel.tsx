import './MyLabel.css';

interface Props {
    /**
     * The text to display
     */
    label: string;
    /**
     * Size of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Whether to display the label in all caps
     */
    allCaps?: boolean;
    /**
     * Custom color for the label
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
     * Custom font color for the label
     */
    fontColor?: string;
}

export const MyLabel = ({
                            label,
                            size = 'normal',
                            allCaps = false,
                            color,
                            fontColor,
                        }: Props) => {
    return (
        <span className={`${size} ${color}`} style={{
            color: fontColor,
        }}>
            { allCaps ? label.toUpperCase() : label }
        </span>
    );
};
