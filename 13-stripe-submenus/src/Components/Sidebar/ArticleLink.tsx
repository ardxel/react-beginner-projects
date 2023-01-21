import React from "react";
import {TSublinks} from "../../data";

interface IArticleLinkProps {
    sublink: TSublinks
}

export default function ArticleLink({sublink}: IArticleLinkProps) {
    const {page, links} = sublink;
    return (
        <article>
            <h4>{page}</h4>
            <div className='sidebar-sublinks'>
                {links.map((link, id) => {
                    const {label, icon, url} = link;
                    return (
                        <a key={id} href={url}>{icon}{label}</a>
                    )
                })}
            </div>
        </article>
    )
}