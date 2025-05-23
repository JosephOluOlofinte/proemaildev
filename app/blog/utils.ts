import fs from "fs";
import path from "path";
import matter from "gray-matter";


// get all MDX files from their dir

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

// read data from MDX files
function readMDXFile(filepath: fs.PathOrFileDescriptor) {
    const rawContent = fs.readFileSync(filepath, 'utf-8');
    return matter(rawContent);
}


// present the MDX data and metedata
function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir);

    return mdxFiles.map((file) => {
        const { data: metadata, content } = readMDXFile(path.join(dir, file));

        const slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            content,
        };
    });
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), "app", "blog", "contents"));
}


export function formatDate(date: string, includeRelative = false) {
    const currentDate = new Date();

    if (!date.includes('T')) {
        date = `${date}T00:00:00`;
    }

    const targetDate = new Date(date);

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    const daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = "";

    if(yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`;
    }

    else if(monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`;
    }

    else if(daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`
    }

    else {
        formattedDate = "Today";
    }

    const fullDate = targetDate.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })

    if(!includeRelative) {
        return fullDate
    }

    else {
        return `${fullDate} (${formattedDate})`
    }
}