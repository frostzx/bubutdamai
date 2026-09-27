import { useHead, useSeoMeta } from '#imports'

export function usePageSeo(title: string, description: string, path: string) {
 const url = `https://bubutdamai.com${path}`
 useHead({title, link:[{rel:'canonical',href:url}]})
 useSeoMeta({description,ogTitle:title,ogDescription:description,ogType:'website',ogUrl:url,ogImage:'https://bubutdamai.com/images/hero.webp',twitterCard:'summary_large_image'})
}
