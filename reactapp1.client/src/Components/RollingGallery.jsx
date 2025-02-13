import { useEffect, useState } from "react";
import {
    motion,
    useMotionValue,
    useAnimation,
    useTransform,
} from "framer-motion";

const IMGS = [
    "https://ravanaramclinic.com/wp-content/uploads/2022/10/Post-Thumbnail-18-1-263x170.jpg.webp",
    "https://ravanaramclinic.com/wp-content/uploads/2022/10/Post-Thumbnail-18-2-263x170.jpg.webp",
    "https://ravanaramclinic.com/wp-content/uploads/2021/11/new1-min-263x170.jpg.webp",
    "https://ravanaramclinic.com/wp-content/uploads/2024/05/Post-Thumbnail-14-263x170.jpg",
    "https://ravanaramclinic.com/wp-content/uploads/2019/09/pszicho-min-e1568891007639-263x170.jpg.webp",
    "https://ravanaramclinic.com/wp-content/uploads/2023/05/Post-Thumbnail-24-14-263x170.jpg.webp",
    "https://ravanaramclinic.com/wp-content/uploads/2024/06/Post-Thumbnail-263x170.jpg",
];

const RollingGallery = ({
    autoplay = false,
    pauseOnHover = false,
    images = [],
}) => {
    images = images.length > 0 ? images : IMGS;

    const [isScreenSizeSm, setIsScreenSizeSm] = useState(
        window.innerWidth <= 700
    );
    useEffect(() => {
        const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 700);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 3D geometry
    const cylinderWidth = isScreenSizeSm ? 1100 : 2500;
    const faceCount = images.length;
    const faceWidth = (cylinderWidth / faceCount) * 1.5;
    const radius = cylinderWidth / (2 * Math.PI);

    // Framer Motion
    const dragFactor = 0.05;
    const rotation = useMotionValue(0);
    const controls = useAnimation();

    // Convert rotation -> 3D transform
    const transform = useTransform(
        rotation,
        (val) => `rotate3d(0,1,0,${val}deg)`
    );

    const startInfiniteSpin = (startAngle) => {
        controls.start({
            rotateY: [startAngle, startAngle - 360],
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
            },
        });
    };

    useEffect(() => {
        if (autoplay) {
            const currentAngle = rotation.get();
            startInfiniteSpin(currentAngle);
        } else {
            controls.stop();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoplay]);

    const handleUpdate = (latest) => {
        if (typeof latest.rotateY === "number") {
            rotation.set(latest.rotateY);
        }
    };

    const handleDrag = (_, info) => {
        controls.stop();
        rotation.set(rotation.get() + info.offset.x * dragFactor);
    };

    const handleDragEnd = (_, info) => {
        const finalAngle = rotation.get() + info.velocity.x * dragFactor;
        rotation.set(finalAngle);

        if (autoplay) {
            startInfiniteSpin(finalAngle);
        }
    };

    const handleMouseEnter = () => {
        if (autoplay && pauseOnHover) {
            controls.stop();
        }
    };
    const handleMouseLeave = () => {
        if (autoplay && pauseOnHover) {
            const currentAngle = rotation.get();
            startInfiniteSpin(currentAngle);
        }
    };

    return (
        <div className="relative h-[500px] w-full overflow-hidden">
            <div
                className="absolute top-0 left-0 h-full w-[48px] z-10"
                style={{
                    background:
                        "linear-gradient(to left, rgba(0,0,0,0) 0%, #060606 100%)",
                }}
            />
            <div
                className="absolute top-0 right-0 h-full w-[48px] z-10"
                style={{
                    background:
                        "linear-gradient(to right, rgba(0,0,0,0) 0%, #060606 100%)",
                }}
            />

            <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
                <motion.div
                    drag="x"
                    dragElastic={0}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    animate={controls}
                    onUpdate={handleUpdate}
                    style={{
                        transform: transform,
                        rotateY: rotation,
                        width: cylinderWidth,
                        transformStyle: "preserve-3d",
                    }}
                    className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
                >
                    {images.map((url, i) => (
                        <div
                            key={i}
                            className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
                            style={{
                                width: `${faceWidth}px`,
                                transform: `rotateY(${(360 / faceCount) * i
                                    }deg) translateZ(${radius}px)`,
                            }}
                        >
                            <img
                                src={url}
                                alt="gallery"
                                className="pointer-events-none h-[120px] w-[300px] rounded-[15px] border-[3px] border-white object-cover
                           transition-transform duration-300 ease-out group-hover:scale-105
                           sm:h-[100px] sm:w-[220px]"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default RollingGallery;
