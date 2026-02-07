'use client';

import { useState } from 'react';
import { Review } from '@/types/movie';
import { Star, User, ThumbsUp, MessageSquare } from 'lucide-react';

interface ReviewSectionProps {
  reviews: Review[];
}

export default function ReviewSection({ reviews }: ReviewSectionProps) {
  const [newReview, setNewReview] = useState('');
  const [userRating, setUserRating] = useState(5);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.trim()) {
      // In a real app, you would send this to your backend
      console.log('Submitting review:', { content: newReview, rating: userRating });
      setNewReview('');
      setUserRating(5);
    }
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  return (
    <div className="space-y-8">
      {/* Reviews Summary */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2">User Reviews</h3>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
              <span className="text-gray-400">/10</span>
              <span className="text-gray-400">• {reviews.length} reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add Review Form */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Write a Review</h3>
        <form onSubmit={handleSubmitReview}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400">Your rating:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setUserRating(rating)}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <Star
                    className={`w-5 h-5 transition-colors ${
                      rating <= userRating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="font-bold ml-2">{userRating}/10</span>
          </div>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Share your thoughts about this movie..."
            className="w-full h-32 p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 resize-none mb-4"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Existing Reviews */}
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="bg-gray-800/50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.author}</h4>
                    <p className="text-sm text-gray-400">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{review.rating}</span>
                  <span className="text-gray-400">/10</span>
                </div>
              </div>
              <p className="text-gray-300">{review.content}</p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-700">
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span>Reply</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No reviews yet. Be the first to review!</p>
          </div>
        )}
      </div>
    </div>
  );
}