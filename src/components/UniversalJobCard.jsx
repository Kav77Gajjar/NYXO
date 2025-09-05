import React from 'react';
import './UniversalJobCard.css';

const UniversalJobCard = ({ 
  job, 
  onToggleLike, 
  onApply,
  showMatchScore = true,
  showHeart = true,
  showSource = true,
  variant = 'default' // 'default', 'application', 'saved'
}) => {
  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const handleApplyClick = () => {
    if (onApply) {
      onApply(job);
    } else {
      // Default apply action
      window.open(job.applyUrl || '#', '_blank');
    }
  };

  return (
    <div className="universal-job-card" style={{
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      padding: '1.25rem',
      transition: 'all 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative'
    }}>
      
      {/* Job Header */}
      <div className="job-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '0.5rem'
      }}>
        <h3 style={{
          margin: '0',
          fontSize: '1.1rem',
          fontWeight: '600',
          color: '#111827',
          lineHeight: '1.4'
        }}>
          {job.title || job.position}
        </h3>
        
        {(showHeart || showMatchScore) && (
          <div style={{ 
            display: 'flex', 
            border: '1px solid #d1d5db', 
            borderRadius: '8px', 
            overflow: 'hidden', 
            marginLeft: 'auto' 
          }}>
            {showHeart && (
              <button 
                className={`heart-btn ${job.isLiked ? 'liked' : ''}`}
                onClick={() => onToggleLike && onToggleLike(job.id)}
                aria-label={job.isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  padding: '0.25rem 0.75rem',
                  color: job.isLiked ? '#ef4444' : '#9ca3af',
                  borderRight: showMatchScore ? '1px solid #d1d5db' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  height: '32px'
                }}
              >
                ♥
              </button>
            )}
            
            {showMatchScore && (
              <button 
                className="match-score-btn"
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.95rem',
                  color: '#10b981',
                  padding: '0.25rem 0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  height: '32px',
                  fontWeight: '500'
                }}
                aria-label="Match score"
              >
                {job.matchScore ? `${job.matchScore}% Match` : 'Match Score'}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Company */}
      <p style={{
        margin: '0 0 0.75rem 0',
        fontSize: '0.95rem',
        fontWeight: '500',
        color: '#4b5563'
      }}>
        {job.company}
      </p>

      {/* Location & Time */}
      <div style={{ 
        marginBottom: '1rem',
        fontSize: '0.85rem',
        color: '#6b7280',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
      }}>
        <span>{job.location}</span>
        <span>{getRelativeTime(job.postedDate || job.appliedDate)}</span>
      </div>

      {/* Tags */}
      {job.tags && job.tags.length > 0 && (
        <div className="job-tags" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          {job.tags.slice(0, 3).map((tag, index) => (
            <span key={index} style={{
              background: '#f3f4f6',
              color: '#374151',
              padding: '0.25rem 0.5rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              {tag}
            </span>
          ))}
          {job.tags.length > 3 && (
            <span style={{
              background: '#f3f4f6',
              color: '#6b7280',
              padding: '0.25rem 0.5rem',
              borderRadius: '50px',
              fontSize: '0.75rem'
            }}>
              +{job.tags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Additional Info for Application variant */}
      {variant === 'application' && job.appliedDate && (
        <div style={{
          background: '#f9fafb',
          padding: '0.75rem',
          borderRadius: '6px',
          marginBottom: '1rem',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
            <span style={{ fontWeight: '500' }}>Applied:</span> {new Date(job.appliedDate).toLocaleDateString()} ({getRelativeTime(job.appliedDate)})
          </div>
          {job.salary && (
            <div style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
              <span style={{ fontWeight: '500' }}>Salary:</span> {job.salary}
            </div>
          )}
        </div>
      )}

      {/* Description */}
      {job.description && (
        <div style={{
          marginBottom: '1.25rem',
          flex: 1
        }}>
          <p style={{
            margin: 0,
            fontSize: '0.875rem',
            lineHeight: '1.5',
            color: '#6b7280',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {job.description}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="job-actions" style={{
        display: 'flex',
        marginBottom: '0.75rem'
      }}>
        <button 
          onClick={handleApplyClick}
          style={{
            background: variant === 'application' ? '#10b981' : 'rgba(17, 24, 39, 0.1)',
            color: variant === 'application' ? '#ffffff' : '#111827',
            border: '1px solid #d1d5db',
            padding: '0.75rem 1rem',
            borderRadius: '6px',
            fontSize: '0.95rem',
            fontWeight: '500',
            cursor: 'pointer',
            width: '100%',
            height: '44px'
          }}
        >
          {variant === 'application' ? 'View Application' : 'Apply'}
        </button>
      </div>

      {/* Source */}
      {showSource && (
        <div style={{
          borderTop: '1px solid #f3f4f6',
          paddingTop: '0.75rem',
          textAlign: 'center'
        }}>
          <span style={{
            fontSize: '0.75rem',
            color: '#9ca3af',
            fontWeight: '500'
          }}>
            via {job.source || job.applicationMethod || 'Company Website'}
          </span>
        </div>
      )}
    </div>
  );
};

export default UniversalJobCard;
