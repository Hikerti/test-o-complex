import {fetchReviews} from "@/app/api/fetchReviews";
import {Review} from "@/widgets/Reviews/interface/interface";
import {CardReview} from "@/entites/Cards";
import {Skeleton} from "@/components/ui/skeleton";

const Reviews = async () => {
    const data = await fetchReviews()

    return (
        <section className="w-full grid grid-cols-1 mt-8 flex gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                data
                    ?
                    data.map((review: Review) => {
                        const match = review.text.match(/<h1>(.*?)<\/h1><p>(.*?)<\/p>/)

                        const title = match?.[1] || ''
                        const content = match?.[2] || ''

                        return (
                            <CardReview
                                key={review.id}
                                id={review.id}
                                title={title}
                                content={content}
                            />
                        )
                    })
                    :
                    (
                        <>
                            <Skeleton className='h-[100px] w-[25%]'/>
                            <Skeleton className='h-[100px] w-[25%]'/>
                            <Skeleton className='h-[100px] w-[25%]'/>
                            <Skeleton className='h-[100px] w-[25%]'/>
                        </>
                    )
            }
        </section>
    );
};

export default Reviews;